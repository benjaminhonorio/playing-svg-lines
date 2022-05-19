import { Box, Container, Grid, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

function App() {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Container>
      <div style={{ height: '50px' }}></div>
      {Array.from(Array(5)).map((_, i) => {
        if (i % 2 === 0) {
          return <Right key={i} value={i} />
        } else {
          return <Left key={i} value={i} />
        }
      })}
      <LastLine />
      {matches ? <LastBox /> : null}
    </Container>
  )
}

export default App

function LastLine() {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <Grid container columns={12}>
      {matches ? <Grid item xs={5}></Grid> : null}

      <Grid item xs={2} position="relative">
        <svg width="100%" height="50%">
          <line
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            stroke="gray"
            strokeWidth="3"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '20px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          C
        </div>
      </Grid>
      <Grid item xs={10} md={5} lg={5}>
        {!matches ? <LastBox /> : null}
      </Grid>
    </Grid>
  )
}

function LastBox() {
  return (
    <Stack textAlign="center" border="1px solid red">
      <Box>Hello</Box>
      <Box>World</Box>
    </Stack>
  )
}

function Right({ value }: { value: number }) {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Grid container columns={12}>
      {matches ? (
        <Grid
          item
          xs={5}
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          padding="20px 0"
        >
          <Box>
            lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, excepturi. Temporibus, obcaecati assumenda
            odit quidem, ducimus eos doloremque enim qui ullam neque quos, aut
            dolorem! Cumque suscipit facere adipisci ab?
          </Box>
        </Grid>
      ) : null}
      <Grid item xs={2} position="relative">
        <svg width="100%" height="100%">
          <line
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            stroke="gray"
            strokeWidth="3"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '20px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          {value}
        </div>
      </Grid>
      <Grid
        item
        xs={10}
        sm={5}
        md={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid tomato',
          margin: '20px 0',
          flexWrap: 'wrap',
          padding: '20px 10px',
        }}
      >
        <Box height="100px"> World</Box>
        {!matches ? (
          <Box>
            lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam, excepturi. Temporibus, obcaecati assumenda
            odit quidem, ducimus eos doloremque enim qui ullam neque quos, aut
            dolorem! Cumque suscipit facere adipisci ab?
          </Box>
        ) : null}
      </Grid>
    </Grid>
  )
}

function Left({ value }: { value: number }) {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Grid container columns={12}>
      {matches ? (
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0',
          }}
        >
          <Box height="100px"> World</Box>
        </Grid>
      ) : null}

      <Grid item xs={2} position="relative">
        <svg width="100%" height="100%">
          <line
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
            stroke="gray"
            strokeWidth="3"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '20px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: '1px solid black',
          }}
        >
          {value}
        </div>
      </Grid>
      <Grid
        item
        xs={10}
        sm={5}
        md={5}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
        padding="20px 10px"
        border="1px solid tomato"
        flexWrap="wrap"
      >
        {!matches ? <Box height="100px"> World</Box> : null}
        <Box>
          lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam, excepturi. Temporibus, obcaecati assumenda
          odit quidem, ducimus eos doloremque enim qui ullam neque quos, aut
          dolorem! Cumque suscipit facere adipisci ab?
        </Box>
      </Grid>
    </Grid>
  )
}
