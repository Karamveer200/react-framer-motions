import { EncryptButton } from "../shared/Buttons/EncryptButton";
import { CustomKanban } from "../shared/Kanban/Kanban";

const Dashboard = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold tracking-tight text-white"></h1>
      </header>

      <div className="mb-10 flex flex-col gap-10">
        <EncryptButton />

        <CustomKanban />
      </div>
    </div>
  );
};

export default Dashboard;
