import { IStockData, IRawStockData } from '../store/game_state/types';

export async function fetchRandomStockData(): Promise<IStockData> {
    const rawData:IRawStockData = await fetch(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b64295d7-2534-4bf0-a49a-8694403ccc57/AAPL_15m_2020_08_01_1.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210207T204056Z&X-Amz-Expires=86400&X-Amz-Signature=eebf123faed5ef82ddec5527158f29e605ba0e9cf5af0142d22a3923226d6cea&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22AAPL_15m_2020_08_01_1.json%22`,
    {
			headers: {
				'Content-Type': 'application/json'
			}
		}
    ).then((res) => res.json())

    if(rawData.data.length === 0) {
        return new Promise<IStockData>((resolve, reject) => {
            reject("failed to fetch stock data")
        })
    }

    let formattedData: IStockData = {
        data: rawData.data,
        ticker: rawData.data[0].symbol
    }

    return new Promise<IStockData>((resolve, reject) => {
        resolve(formattedData)
    })
}
