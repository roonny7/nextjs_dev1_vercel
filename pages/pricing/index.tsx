import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>estamos en Pricing</h1>
        <h1 className="title">
          Ir a <Link href="/">Home</Link>
        </h1>
    </MainLayout>
  )
}
