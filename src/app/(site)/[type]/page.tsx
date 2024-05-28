function Page({ params }: { params: { type: string } }) {
  const { type } = params;
  return <div>Главная страница {type}</div>;
}

export default Page;
