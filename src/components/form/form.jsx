export default function Contactform(props){

    let output

    if (props.mobile){
        output = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScLftno0h937iQIH2iN-wkth7sChx3cN20Ozsg1Gyb-uBfGPg/viewform?embedded=true" width="400em" height="1200em" frameborder="0" marginheight="0" marginwidth="0" title="Mobileform">Carregando…</iframe>
    }
    else{
        output = <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScLftno0h937iQIH2iN-wkth7sChx3cN20Ozsg1Gyb-uBfGPg/viewform?embedded=true" width="800em" height="1200em" frameborder="0" marginheight="0" marginwidth="0" title="form">Carregando…</iframe>
    }
    
    return(
        output
    )
}