import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

	let { id, name } = useParams()
	// console.log(id, name)
	return (
		<div className='flex flex-col justify-center items-center'>
			<Menu />
			<div className='text-center'>
				<h1 className='text-purple-500 text-xl font-bold underline'>
					Product page
				</h1>
				<p>id: {id}</p>
				<h3>name: {name}</h3>
			</div>
		</div>
	)
}

export default ProductPage
