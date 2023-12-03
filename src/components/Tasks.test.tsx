import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import Tasks from "./Tasks";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tasks Component", () => {
   const worker = setupServer(
      http.get("https://jsonplaceholder.typicode.com/todos", async (params) => {
         return HttpResponse.json([
            {
               userId: 1,
               id: 1,
               title: "delectus aut autem",
               completed: false,
            },
         ]);
      })
   );

   beforeAll(() => {
      worker.listen();
   });
   beforeAll(() => {
      worker.resetHandlers();
   });

   it("should fetch and show tasks on button click", async () => {
      render(<Tasks />);

      const button = screen.getByText(/Get tasks from Api/i);

      fireEvent.click(button);

      await screen.findByText("delectus aut autem");
   });

   it("should show error message on fetch error", async () => {
      worker.use(
         http.get(
            "https://jsonplaceholder.typicode.com/todos",
            async (params) => {
               return new HttpResponse(null, {
                  status: 500,
                  statusText: "error happened",
               });
            }
         )
      );

      render(<Tasks />);

      const button = screen.getByText(/Get tasks from Api/i);

      fireEvent.click(button);

      await screen.findByText("error happened");
   });
});
