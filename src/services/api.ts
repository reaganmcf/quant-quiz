import { IStockData, IRawStockData } from '../store/game_state/types';

export async function fetchRandomStockData(): Promise<IStockData> {
    const rawData:IRawStockData = await fetch(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c006f0d0-e694-4a65-bab8-9ec4db133db2/AAPL_15m_2020_08_01_0.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210209T214539Z&X-Amz-Expires=86400&X-Amz-Signature=40b9d78c4424ec499ac08a7f0e14fc08b29a751ce55e8de6ef6f1d79ee7c30f8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22AAPL_15m_2020_08_01_0.json%22`,
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
