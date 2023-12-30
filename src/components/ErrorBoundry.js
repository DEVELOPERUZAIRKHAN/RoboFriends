import React from "react";


class ErrorBoundry extends React.Component{


    constructor(props)
    {
        super(props);
        this.state={
            hasError:false
        }

    }
    componentDidCatch(err,info){
        console.log('error occured')
        this.setState({hasError:true})

    }

    render(){

        if(this.state.hasError){
            return <h1>Oooops. That was unexpected.</h1>
        }
        return this.props.children

    }
}

export default ErrorBoundry;