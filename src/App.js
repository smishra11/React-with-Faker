import React, { Component } from 'react';
import Modal from './Modal';
import faker from 'faker';

class App extends Component {
  state = {
    persons: [],
    isClicked: false,
    userDetails: {},
    isDetailsClicked: false,
  };

  generateData = () => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      let obj = {
        profileImage: faker.image.image(),
        name: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          gender: faker.name.gender(),
          email: faker.internet.email(),
          phone: faker.phone.phoneNumber(),
        },
        address: {
          streetName: faker.address.streetName(),
          state: faker.address.state(),
          city: faker.address.city(),
          zip: faker.address.zipCode(),
          country: faker.address.country(),
          timeZone: faker.address.timeZone(),
        },
        vehicle: {
          model: faker.vehicle.model(),
          color: faker.vehicle.color(),
          manufacturer: faker.vehicle.manufacturer(),
        },
        company: {
          name: faker.company.companyName(),
          jobTitle: faker.name.jobTitle(),
          jobArea: faker.name.jobArea(),
        },
        finance: {
          accountName: faker.finance.accountName(),
          accountNumber: faker.random.number({
            min: 100000000000,
            max: 999999999999,
          }),
          amount: faker.finance.amount(),
          currencySymbol: faker.finance.currencySymbol(),
          creditCardNumber: faker.finance.creditCardNumber(),
          creditCardCVV: faker.finance.creditCardCVV(),
        },
      };
      arr.push(obj);
    }
    this.setState({ persons: arr });
  };

  componentDidMount() {
    this.generateData();
  }

  deatilsClicked = (p) => {
    this.setState({ userDetails: p, isDetailsClicked: true });
    console.log(p, '--clicked');
  };

  render() {
    return (
      <div>
        <h2
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: 'deepskyblue',
            fontWeight: 'bold',
            textDecoration: 'underline dotted grey',
          }}
        >
          React with Faker
        </h2>
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                key={i}
              >
                <div className="card mt-3 bg-light" style={{ width: '50%' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body" style={{ fontWeight: 'bold' }}>
                      <span>
                        <img
                          src={p.profileImage}
                          alt="profile img"
                          style={{
                            height: '20px',
                            width: '20px',
                            marginRight: '15px',
                            borderRadius: '7px',
                          }}
                        />
                      </span>
                      {p.name.firstName} {p.name.lastName}
                    </div>
                    <div
                      style={{
                        color: 'deepskyblue',
                        textDecoration: 'underline',
                        marginRight: '20px',
                        cursor: 'pointer',
                      }}
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => this.deatilsClicked(p)}
                    >
                      View details
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.isDetailsClicked ? (
          <Modal userDetails={this.state.userDetails} />
        ) : null}
      </div>
    );
  }
}

export default App;
