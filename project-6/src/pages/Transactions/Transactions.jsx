import { Card,Flex,Button, Icon } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";

function Transactions() {
  return (
    <DashboardLayout title={"Dashboard"} >
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={ MdOutlineFileDownload }/>} >Export CSV</Button>
      </Flex>
      <Card>
        Transactions
      </Card>
    </DashboardLayout>
  )
}

export default Transactions