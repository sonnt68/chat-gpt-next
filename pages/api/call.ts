// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const postHeaders = {
  'Content-Type': 'application/json',
};

async function handler(req: any, res: any) {
  const dataBody = {
    network: 'ALL',
    period: '24H',
    sortType: 'volumeDesc',
    page: 1,
    rows: 25,
  };
  console.log('runnnn');

  const body = JSON.stringify(dataBody as any);

  try {
    const { data: collect } = await axios.post(`https://www.binance.com/bapi/nft/v1/friendly/nft/ranking/top-collections-v2`, body, {
      headers: { ...postHeaders },
    });
    // console.log(await data);
    // return new Response(collect);
    res.status(200).send({ data: collect });
  } catch (error) {
    console.log('error', error);
    res.status(400);
  }
}

export default handler;
