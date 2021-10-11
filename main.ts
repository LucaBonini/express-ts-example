import { Application } from "./application";
import { container } from "./context/Ioc";

const PORT = process.env.PORT || 3000
const application = container.get(Application)

application.bootstrap()
application.applicationServer.listen(PORT, () => {
  console.log('application started on port ', PORT)
})