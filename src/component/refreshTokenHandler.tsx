import { useSession } from 'next-auth/react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import axios from "axios";

interface Props {
  setSessionRefetchInterval: Dispatch<SetStateAction<number>>
}

const RefreshTokenHandler = ({ setSessionRefetchInterval }: Props) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (!!session) {
      const nowTime = Math.round(Date.now() / 1000)
      const min = 2
      const timeRemaining =
        (session.accessTokenExpires as number) - min * 60 - nowTime
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user/hello`
      if (timeRemaining <= 0) {
        const res = axios.post(url)
        console.log(JSON.stringify(res))
      }
      setSessionRefetchInterval(timeRemaining > 0 ? timeRemaining : 0)
    }
  }, [session, setSessionRefetchInterval])

  return null
}

export default RefreshTokenHandler