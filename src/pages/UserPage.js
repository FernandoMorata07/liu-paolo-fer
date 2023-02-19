export const UserPage = (user) => {
  return (
    <section>
      <h2>User {user.email}</h2>
      <section class="user-data">
        <p>User id: {user.id}</p>
      </section>
    </section>
  );
};
