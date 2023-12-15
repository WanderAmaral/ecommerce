
import { FunctionComponent } from "react"
import Header from "./components/Header/header.components"

interface AppProps {
  message?: string
}

const Home: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
    <Header />
    </div>
  )
}

export default Home
