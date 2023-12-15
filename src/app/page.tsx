import { FunctionComponent } from "react"

interface AppProps {
  message?: string
}

const Home: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <h1>Hello world</h1>
  )
}

export default Home
