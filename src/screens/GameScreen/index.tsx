import { randomInt } from 'crypto';
import { format } from 'path';
import * as React from 'react';
import Chart from 'react-google-charts';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
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

  // load stock data
  React.useEffect(() => {
    if (gameState.currentData!.data.length === 0)
      dispatch(getRandomStockData());
  });

  if (gameState.currentData!.data.length > 0) {
    // Pick a random slice of 25 or more candles
    let randomSlice = gameState.currentData!.data.slice(100, 140);
    let formattedData = Array(randomSlice.length + 1);
    formattedData[0] = ['day', 'a', 'b', 'c', 'd'];
    console.log(randomSlice);

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
          text="$AAPL"
          animationIn="bounceInDown"
          animationOut="bounceOutUp"
        />
        <Chart
          style={{
            padding: '10px',
            margin: 'auto',
          }}
          width={'95%'}
          height={350}
          chartType="CandlestickChart"
          loader={
            <div>
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
      </ScreenContainer>
    );
  } else {
    return (
      <ScreenContainer>
        <ScreenHeader
          text="$AAPL"
          animationIn="bounceInDown"
          animationOut="bounceOutUp"
        />
      </ScreenContainer>
    );
  }
};
