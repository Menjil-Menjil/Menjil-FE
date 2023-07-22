import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {AuthInfo} from "@/pages/_app";

interface Props {
  children: any
  authInfo: AuthInfo
}

const AuthContainer = ({ children, authInfo }: Props) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  const isMember = (!!session?.accessToken && !!session?.refreshToken) ? 'member' : undefined

  const redirect = authInfo?.redirect || '/'
  const role = authInfo.role
  const loading = authInfo?.loading || <div>Loading</div>

  useEffect(() => {
    if (status === 'loading') return
    if (!isUser || isMember!==role) {
      router.push(redirect)
    }
  }, [isUser, status])

  if (isUser && isMember===role) {
    return children
  }

  return loading
}

export default AuthContainer