import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const Page = () => (
  <>
    <Head>
      <title>Home | MDO</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={6} xl={4} xs={12}>
            {/* <Budget /> */}
            <Typography color="textPrimary" variant="h4">
              Welcome to MDO Dashboard
            </Typography>
            <hr />
          </Grid>
          {/* <Grid item lg={8} md={12} xl={9} xs={12}>
            created by tsaqif
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
