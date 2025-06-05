export async function generateMetadata({ params }) {
  

  return {
    title: `Blog ${params.slug}`,
    description: `View details for Blog`,
  };
}

const page = ({params}) => {
  return (
    <div>
      page with slug id {params.slug}
    </div>
  )
}

export default page
