import { randomInt } from 'crypto';
import { format } from 'path';
import * as React from 'react';
import Chart from 'react-google-charts';
import { chartDefaultProps } from 'react-google-charts/dist/default-props';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from '../../components/Button';
import { ScreenContainer } from '../../components/SceneContainer';
import { ScreenHeader } from '../../components/ScreenHeader';
import { IAppState } from '../../store';
import { ICandleEntry, IGameState } from '../../store/game_state/types';
import theme from '../../theme';
import { getRandomStockData } from './../../store/game_state/actions';

export const GameScreen: React.FC = () => {
  const gameState: IGameState = useSelector(
    (state: IAppState) => state.gameState
  );
  const dispatch: Dispatch<any> = useDispatch();

  interface IAnswerState {
    answered: boolean;
    guess?: 'sell' | 'buy';
    didWin?: boolean;
  }
  const [answerState, setAnsweredState] = React.useState<IAnswerState>({
    answered: false,
  });
  const [currentTick, setTicks] = React.useState(0);

  // load stock data
  React.useEffect(() => {
    if (gameState.currentData!.data.length === 0)
      dispatch(getRandomStockData());
  });

  // get guess price and final price
  const SLICE_END = 25;
  const MAX_TICK = 25;
  var guess_price: ICandleEntry, final_price: ICandleEntry;
  if (gameState.currentData && gameState.currentData.data.length > 0) {
    guess_price = gameState.currentData.data[SLICE_END - 1];
    final_price = gameState.currentData.data[SLICE_END - 1 + MAX_TICK];
  }
  setTimeout(() => {
    if (answerState.answered && currentTick < MAX_TICK) {
      setTicks(currentTick + 1);
    } else if (currentTick === MAX_TICK) {
      setTicks(currentTick + 1);
      // let winState;
      // if (answerState.guess === 'buy') {
      //   winState = final_price.last >= guess_price.last;
      // } else {
      //   winState = final_price.last <= guess_price.last;
      // }
      // setAnsweredState({
      //   ...answerState,
      //   didWin: winState,
      // });
      // console.log(answerState);
    }
  }, 50);

  // handle sell
  const handleSell = () => {
    guess_price = gameState.currentData!.data[SLICE_END - 1];
    final_price = gameState.currentData!.data[SLICE_END - 1 + MAX_TICK];
    setAnsweredState({
      answered: true,
      guess: 'sell',
      didWin: final_price.close < guess_price.close,
    });
    console.log(final_price);
    console.log(guess_price);
  };

  // handle buy
  const handleBuy = () => {
    // guess_price = gameState.currentData!.data[SLICE_END - 1];
    // final_price = gameState.currentData!.data[SLICE_END - 1 + MAX_TICK];
    setAnsweredState({
      answered: true,
      guess: 'buy',
      didWin: final_price.close >= guess_price.close,
    });
  };

  // conditional render
  if (gameState.currentData && gameState.currentData.data.length > 0) {
    // Pick a random slice of 25 or more candles
    let randomSlice = gameState.currentData!.data.slice(
      0,
      !answerState.answered ? SLICE_END : SLICE_END + currentTick
    );
    // guess_price = randomSlice[SLICE_END - 1];
    // final_price = randomSlice[randomSlice.length - 1];
    let formattedData = Array(randomSlice.length + 1);
    formattedData[0] = ['day', 'low', 'open', 'close', 'high'];

    randomSlice.forEach((entry: ICandleEntry, index: number) => {
      let newrow = [
        index + 1,
        entry.low,
        index === 0 ? entry.open : randomSlice[index - 1].close,
        entry.close,
        entry.high,
      ];
      formattedData[index + 1] = newrow;
    });
    // randomSlice.forEach((entry: ICandleEntry, index: number) => {
    //   let newrow = [index + 1, entry.last, entry.last, entry.last, entry.last];
    //   formattedData[index + 1] = newrow;
    // });

    return (
      <ScreenContainer>
        <ScreenHeader
          text={'$' + gameState.currentData!.ticker}
          animationIn="bounceInDown"
          animationOut="bounceOutUp"
          style={
            !answerState.answered
              ? {
                  color: 'transparent',
                  textShadow: '0 0 30px #FF5A00',
                }
              : {}
          }
        />
        <Chart
          style={{
            padding: 10,
            margin: 'auto',
          }}
          width={'95%'}
          height={350}
          chartType="CandlestickChart"
          loader={
            <div style={{ textAlign: 'center' }}>
              <p>Loading Chart...</p>
            </div>
          }
          data={formattedData}
          options={{
            legend: 'none',
            bar: { groupWidth: '100%' }, // Remove space between bars.
            candlestick: {
              fallingColor: { strokeWidth: 1, fill: '#a52714' }, // red
              risingColor: { strokeWidth: 1, fill: '#0f9d58' }, // green
            },
            backgroundColor: '#333333',
            colors: ['black'],
          }}
        />
        {!answerState.answered ? (
          <div style={{ padding: 20, textAlign: 'center' }}>
            <Button
              style={{ display: 'inline', marginRight: 20 }}
              small
              nolink
              onClick={handleSell}
              backgroundColor={theme().red}
            >
              Sell
            </Button>
            <Button
              style={{ display: 'inline' }}
              small
              nolink
              onClick={handleBuy}
              backgroundColor={theme().green}
            >
              Buy
            </Button>
          </div>
        ) : answerState.didWin && currentTick === MAX_TICK ? (
          <p>You won!</p>
        ) : (
          <p>You lost</p>
        )}
      </ScreenContainer>
    );
  } else {
    return (
      <ScreenContainer>
        <ScreenHeader
          text={'Loading...'}
          animationIn="bounceInDown"
          animationOut="bounceOutUp"
        />
        <div style={{ height: '350px' }} />
      </ScreenContainer>
    );
  }
};
