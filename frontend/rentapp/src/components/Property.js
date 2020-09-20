import React from 'react';
import PropertyList from './PropertyList';
import PropertySearchBar from './PropertySearchBar';
import AddProperty from './AddProperty';
import { withRouter } from 'react-router-dom';
import AuthHelperMethods from '../services/AuthHelperMethods';

const userHelper = new AuthHelperMethods();

class Property extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      filter: undefined,
      propertySelected: undefined,
    };
  }

  setFilter = (dataFromChild) => {
    this.setState({ filter: dataFromChild });
  };

  addProperty = () => {
    return <AddProperty callbackFromParent={this.setFilter} />;
  };

  selectProperty = (id) => {
    this.setState({ propertySelected: id });
  };

  mostrarVista() {
    return (
      <div className="propertyList">
        <PropertySearchBar callbackFromParent={this.setFilter} />
        {userHelper.loggedIn() && userHelper.getConfirm().user_name === 'ADMIN'
          ? this.addProperty()
          : ''}
        <PropertyList
          value={this.state.filter}
          changeProperty={this.selectProperty}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Property">
        <div className="mainView">{this.mostrarVista()}</div>
      </div>
    );
  }
}

export default withRouter(Property);
