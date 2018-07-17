import { connect } from 'react-redux'
import { Beer } from '../../components/beer/beer'

import { addBeer, retrieveData } from '../../actions/beer/actions';

const mapStateToProps = ({
    routes,
    beerReducer: {loading, datos, error}
}) => ({
    routes: routes,
    loading: loading,
    datos: datos,
    error: error
})

const mapDispatchToProps = {
    add: addBeer,
    retrieve: retrieveData
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer);