import { GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection"
import { Grid } from "@chakra-ui/react"


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
        <GridItem colSpan={1}>
          <PriceSection/>
        </GridItem>
      </Grid>
     </DashboardLayout>

  )
}

export default Dashboard