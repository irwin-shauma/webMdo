import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";

const varToString = (varObj) => Object.keys(varObj)[0];

const Page = () => {
  return (
    <>
      <Head>
        <title>BIFAST Check | MDO</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={6} sm={6} xl={4} xs={12}>
              <Typography color="textPrimary" variant="h4">
                This page will be used for Bifast Checking
              </Typography>
              <hr />
              <Typography color="textPrimary" variant="h4">
                *Still in construction*
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
