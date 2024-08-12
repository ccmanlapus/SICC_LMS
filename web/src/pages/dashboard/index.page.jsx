import Link from 'next/link'
import { TbLayoutDashboard } from 'react-icons/tb'

import Card from '@/components/organisms/Card'
import PageHeader from '@/components/organisms/PageHeader'
import Template from '@/components/templates/Template'

const Dashboard = () => {
  const breadcrumbs = [
    {
      href: '#',
      title: 'Dashboard',
      icon: TbLayoutDashboard,
    },
  ]

  return (
    <div>
      <Template>
        <PageHeader breadcrumbs={breadcrumbs} />
        <div className='flex grid gap-3 mb-6 md:grid-cols-4'>
          <Link href='/dashboard/class'>
            <Card
              title={'GE1 Under Standing the self'}
              description={'Tonette Parenas'}
            />
          </Link>
          <Card title={'GE2'} description={'Tonette Parenas'} />
          <Card title={'GE3'} description={'Tonette Parenas'} />
          <Card title={'GE4'} description={'Tonette Parenas'} />
        </div>
      </Template>
    </div>
  )
}

export default Dashboard
