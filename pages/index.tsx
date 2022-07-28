import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
        <h1>estamos en Home</h1>

        <h1 className={'title'}>
          { /*Ir a <a href="/about">about</a>*/ }

          Ir a <Link href="/about">About</Link>
        </h1>
    </MainLayout>
  )
}
