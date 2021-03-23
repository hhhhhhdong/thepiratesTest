import Layout from '../containers/Layout';
import Filter from '../utils/Filter';
import { storeData } from '../data/demo_data';

function Market() {
  return (
    <Layout>
      <Filter />
      <div>Market world!!</div>
    </Layout>
  );
}

export default Market;
