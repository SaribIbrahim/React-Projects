import { Card, Flex, Button, Icon,Tabs,TabPanels,Tab, TabPanel,TabList,Tag, HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionTable from './TransactionTable';
import { BsSearch } from "react-icons/bs";

function Transactions() {

  const tabs=[
    {
      name:"All",
      count:345
    },
    {
      name:"Deposit",
      count:121
    },
    {
      name:"Withdraw",
      count:23
    },
    {
      name:"Transfer",
      count:101
    },
  ]

  return (
    <DashboardLayout title={"Transactions"} >
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />} >Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt={4} display="flex"
            w="full"
            justifyContent="space-between">
            <HStack>
              {
                tabs.map((arr, index) => (
                  <Tab key={index} display={"flex"} gap={2}>
                    {arr.name}
                    <Tag borderRadius={"full"} colorScheme='gray'>{arr.count}</Tag>
                  </Tab>
                ))
              }
            </HStack>
            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="text" placeholder="Search..." />
            </InputGroup>       
          </TabList>
          <TabPanels>
            <TabPanel><TransactionTable/></TabPanel>
            <TabPanel><TransactionTable/></TabPanel>
            <TabPanel><TransactionTable/></TabPanel>
            <TabPanel><TransactionTable/></TabPanel>
          </TabPanels> 
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transactions