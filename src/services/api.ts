import { IStockData, IRawStockData } from '../store/game_state/types';

export async function fetchRandomStockData(): Promise<IStockData> {
    const rawData:IRawStockData = await fetch(
    `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9c034d5-de6c-4101-b49b-4082080639d7/AAPL_EOD_2020_08_01_0.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210209T235707Z&X-Amz-Expires=86400&X-Amz-Signature=89f57898ad061a51f5c005007125c915f837c4cdbdaf37a77f48839e89bc7d27&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22AAPL_EOD_2020_08_01_0.json%22`,
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
