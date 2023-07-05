import ButtonTest from '@/components/ButtonTest'

type Data = {
	msg: string
}

async function getData() {
	const res = await fetch('/api/hello')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data: Data = await getData()

	return (
		<div className='text-lg'>
			{data.msg}
			<ButtonTest />
		</div>
	)
}
