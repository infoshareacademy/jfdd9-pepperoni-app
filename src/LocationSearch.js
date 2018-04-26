import React from 'react'
import gangsterDatabase from '../public/gangsterDatabase.json'

class LocationSearch extends React.Component {
  state ={
    filteredList: []
  }

  filterDatabase =(event) => {
    const updatedList = gangsterDatabase.filter(city => city === event.target.value)
    console.log(updatedList)
  }
  render() {
    return (
      <div>
        <form>
            <fieldset className="form-group">
              <input type="text" placeholder="Enter city" onChange={this.filterDatabase}/>
            </fieldset>
        </form>
        </div>
    )
  }
}

export default LocationSearch

// var FilteredList = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//     return {
//       initialItems: [
//         "Apples",
//         "Broccoli",
//         "Chicken",
//         "Duck",
//         "Eggs",
//         "Fish",
//         "Granola",
//         "Hash Browns"
//       ],
//       items: []
//     }
//   },
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//       <div className="filter-list">
//         <form>
//           <fieldset className="form-group">
//             <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//           </fieldset>
//         </form>
//         <List items={this.state.items}/>
//       </div>
//     );
//   }
// });
//
// var List = React.createClass({
//   render: function(){
//     return (
//       <ul className="list-group">
//         {
//           this.props.items.map(function(item) {
//             return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//           })
//         }
//       </ul>
//     )
//   }
// });
//
// React.render(<FilteredList/>, document.getElementById('app'));