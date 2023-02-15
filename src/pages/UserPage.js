export const UserPage = (user) => {
  return (
    <section>
      <h1>User {user.email}</h1>
      <section class="user-data">
        <p>User id: {user.id}</p>
      </section>
    </section>
  );
};
