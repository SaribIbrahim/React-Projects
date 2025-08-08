import { GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection"
import { Grid } from "@chakra-ui/react"
import Transactions from "./components/Transactions"
import InfoCard from "./components/InfoCard"


function Dashboard() {
  return (
     <DashboardLayout title={"Dashboard"}>
      {/* Grid layout with 2 columns on medium+ screens, 1 column on mobile */}
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={6}>

        {/* Portfolio section spans both columns (full width) */}
        <GridItem colSpan={2}>
          <PortfolioSection/>
        </GridItem>

         {/* Price section spans one column (half width on md+) */}
        <GridItem colSpan={{base:2,md:1}}>
          <PriceSection/>
        </GridItem>

        <GridItem colSpan={{base:2,md:1}}>
          <Transactions/>
        </GridItem>

        <GridItem colSpan={{base:2,md:1}}>
          <InfoCard text={"Learn more about Loans – Keep your Bitcoin, access its value without selling it"} tag={"Loan"} inverted={false}/>
        </GridItem>

        <GridItem colSpan={{base:2,md:1}}>
          <InfoCard  text={"Learn more about our real estate, mortgage, and  corporate account services"} tag={"Contact"} inverted={true}/>
        </GridItem>

      </Grid>
     </DashboardLayout>

  )
}

export default Dashboard