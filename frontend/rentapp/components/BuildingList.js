import React, { Component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BuildingCard from './BuildingCard';

export default function BuildingList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users')
          .then((res) => res.json())
          .then((res) => res.data)
      );
    }
    fetchData();
  }, []);
  return (
    <div className="building-list">
      <Grid container spacing={5} style={{ padding: '24px' }}>
        {users.map((users) => (
          <Grid key={users.id} itemxs={12} sm={6} md={4} lg={4} xl={3}>
            <BuildingCard
              key={users.id}
              email={users.email}
              firstname={users.first_name}
              lastname={users.last_name}
              avatar={users.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
