import React, {useState, useEffect} from "react";
import Container from "../components/container";
import Row from "../components/row";
import Column from "../components/column";
import Textbox from "../components/textbox";
import API from "../utils/Api"
import MarketContext from "../utils/MarketContext" 

export default function Homepage(props) {
    const [marketPlaceList, setMarketPlaceList] = useState({
      results: [],
      original: []
    })

    const [search, setSearch] = useState("")

    useEffect(() => {

      API.search().then(API => {
        console.log(API.data.results)
  
        setMarketPlaceList({
          results: API.data.results,
          original: API.data.results
        })
      })
      
    }, [])
    
    const handleChange = (event) => {
      const { value } = event.target
      setSearch(value)
  
      console.log(value)
  
      // let newmarketPlaceList = setMarketPlaceList.original.filter(product => {
      //     return product.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1
      // })
  
      setMarketPlaceList({
        
        results: newmarketPlaceList,
        original: marketPlaceList.original
      })
  }
    return (
         <MarketContext value={marketPlaceList}>
         <Container>
          <Row>
            <Column size="col-sm-6">
              <Textbox search={search} handleChange={handleChange}  />
            
    
              
            </Column>
            <Column size="col-sm-6"></Column>
          </Row>
        </Container> 
        </MarketContext> 
       
    
    
        
      );
    
    
}