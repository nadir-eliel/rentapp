import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './PropertyCard';
import { withRouter } from 'react-router-dom';

//import UploadImagen from './UploadImage';

function PropertyList1() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProperties(
        /*await fetch('https://reqres.in/api/users?per_page=12')
          .then((res) => res.json())
          .then((res) => res.data)*/
        data.properties
      );
    }
    fetchData();
  }, []);

  const data = {
    offset: 0,
    size: 0,
    // eslint-disable-next-line no-sparse-arrays
    properties: [
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        photos: [
          'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg',
        ],
        bathroom_count: 2,
        bedroom_count: 2,
        garage: true,
        backyard: false,
        pets: true,
        kids: true,
        room_count: 4,
        other_building_details:
          'Luminoso, excelente ubicación, admite mascotas y niños.',
        address: {
          province: 'Neuquén',
          city: 'San Martín de los Andes',
          street_number: 'Belgrano 125',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        photos: [
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
        ],
        bathroom_count: 2,
        bedroom_count: 3,
        garage: true,
        backyard: true,
        pets: true,
        kids: false,
        room_count: 2,
        other_building_details:
          'Varios ambientes, patio grande y comedor espacioso',
        address: {
          province: 'Neuquén',
          city: 'Centenario',
          street_number: 'Honduras 191',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        photos: [
          'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/X7MEAFG6FNECVOWVTM3WYC555Q.jpg',
        ],
        bathroom_count: 2,
        bedroom_count: 2,
        garage: true,
        backyard: true,
        pets: true,
        kids: true,
        room_count: 4,
        other_building_details:
          'Mansion grande, digna de un sicario de la mafia italiana',
        address: {
          province: 'Salta',
          city: 'Salta',
          street_number: 'Portugal 125',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
        photos: [
          'https://s04.s3c.es/imag/_v0/770x420/7/d/7/600x400_Casa-de-los-simpson.png',
        ],
        bathroom_count: 4,
        bedroom_count: 1,
        garage: true,
        backyard: true,
        pets: true,
        kids: true,
        room_count: 4,
        other_building_details:
          'Ex casa de familia de tez amarilla mediaticamente conocida.',
        address: {
          province: 'Tierra del Fuego',
          city: 'Springfield',
          street_number: 'Av. Siempre Viva 123',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
        photos: ['https://pbs.twimg.com/media/DsONJkrXgAAoivG.jpg'],
        bathroom_count: 10,
        bedroom_count: 5,
        garage: false,
        backyard: true,
        pets: true,
        kids: true,
        room_count: 12,
        other_building_details:
          'Ubicada en el medio de la selva, ideal cazador furtivo',
        address: {
          province: 'Chaco',
          city: 'Selva Oeste',
          street_number: 'A la vuelta del quito tronco 612',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
        photos: [
          'https://www.travelreport.mx/wp-content/uploads/2018/12/tuneles-chinos-en-mexicali-cuarto.jpg',
        ],
        bathroom_count: 1,
        bedroom_count: 1,
        garage: false,
        backyard: false,
        pets: false,
        kids: false,
        room_count: 1,
        other_building_details:
          'Cuarto bajo tierra, clandestina, completamente inhumano. Buen precio',
        address: {
          province: 'Buenos Aires',
          city: 'Estacion Constituyentes',
          street_number: 'Subte linea B',
        },
      },
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
        photos: [
          'https://i.pinimg.com/736x/ef/74/8f/ef748f319ff248216cefb4fbcf0c1699.jpg',
        ],
        bathroom_count: 2,
        bedroom_count: 2,
        garage: true,
        backyard: true,
        pets: true,
        kids: true,
        room_count: 4,
        other_building_details:
          'Ubicada a 623 mts de altura, sin elevador ni electricidad, excelente vista',
        address: {
          province: 'Salta',
          city: 'Arbolandia',
          street_number: 'Roble 1',
        },
      },
      ,
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
        photos: [
          'https://laopinion.com/wp-content/uploads/sites/3/2020/03/casa-cueva-bisbee-arizona.jpg?quality=80&strip=all&w=940',
        ],
        bathroom_count: 2,
        bedroom_count: 2,
        garage: true,
        backyard: true,
        pets: true,
        kids: true,
        room_count: 4,
        other_building_details:
          'Casa debajo una cueva, tallada a mano con un destornillador de punta philips',
        address: {
          province: 'Santa Cruz',
          city: 'Cavernas de la Luz',
          street_number: 'Quinta cueva',
        },
      },
    ],
  };

  return (
    <div className="property-list">
      <Grid container spacing={5} style={{ padding: '24px' }}>
        {properties.map((property) => (
          <Grid
            key={property.id}
            item={true}
            itemxs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <PropertyCard
              key={property.id}
              photo={property.photos[0]}
              bathroom_count={property.bathroom_count}
              bedroom_count={property.bedroom_count}
              commentary_count={Math.floor(Math.random() * 5) + 1}
              valoration={3.2}
              price={Math.floor(Math.random() * 17505) + 1}
              other_property_details={property.other_building_details}
            />
          </Grid>
        ))}
      </Grid>
      {console.log(PropertyList)}
    </div>
  );
}

export default withRouter(PropertyList);
