import React, {useEffect} from 'react';
import Tabs, {Tab} from './components/Tabs'
import List from './views/ListView';
import styled from "styled-components"
import { fetchMerchants, selectBilledMerchant, selectNotBilledMerchant, selectMerchants } from './redux/merchantsSlice'
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  className?: string
}

const App: React.FunctionComponent<Props> = ({className}) => {
  const dispatch = useDispatch()

  const billedMerchantList = useSelector(selectBilledMerchant)
  const notBilledMerchantList = useSelector(selectNotBilledMerchant)
  const { isLoading, data } = useSelector(selectMerchants)

  useEffect(() => {
    dispatch(fetchMerchants())
  }, [dispatch])


  return (
    !isLoading && data.length ? (<div className={className}>
      <Tabs>
        <Tab title="Billed Merchants">
          <List items={billedMerchantList}></List>
        </Tab>
        <Tab title="Not Billed Merchants">
          <List items={notBilledMerchantList}></List>
        </Tab>
      </Tabs>
    </div>) : <>Loading</>
)};

export default styled(App)`
 padding: 30px 100px;
`;
