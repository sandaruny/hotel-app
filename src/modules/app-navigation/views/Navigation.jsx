import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div className="app-navigation">
      <Navbar>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar>
    </div>
  )
};

export default Navigation;
