import RatioProps from '../types/RatioProps'

/**
 * Component to unshamely ratio someone.
 */
const Ratio = ({ sentence }: RatioProps) => {
	return (
		<div>
			<div>RATIO</div>
			<div>{sentence}</div>
		</div>
	)
}

export default Ratio;