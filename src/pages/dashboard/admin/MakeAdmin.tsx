import MakeAdminTable from '@/components/dashboard/admin/MakeAdminTable';
import SectionHeading from '@/components/ui/SectionHeading';

const MakeAdmin = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center">
          <SectionHeading heading="Make Admin" />
        </div>
        <div>
          <MakeAdminTable />
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
