type BannerShadowProps = {
  title: string;
  description: string;
};

const BannerShadow = (props: BannerShadowProps) => {
  const { title, description } = props;
  return (
    <section className='from-primary pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-2/4 flex-col justify-end rounded-sm bg-linear-to-t to-transparent p-3 text-white'>
      <p className='text-sm'>{description}</p>
      <h2 className='font-medium'>{title}</h2>
    </section>
  );
};

export default BannerShadow;
