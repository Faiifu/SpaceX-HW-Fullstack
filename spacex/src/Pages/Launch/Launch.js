function Launch() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center justify-items-center h-64  bg-black">
          <h1 className="underline text-5xl text-white">Launches List</h1>
          <div className="pt-16 text-sm">
              <select className="mx-4" name="" id="" >
                <option value="">Some Launches</option>
              </select>
              <select className="mx-4" name="" id="" >
                <option value="">10-10-2020</option>
              </select>
              <select className="mx-4" name="" id="" >
                <option value="">true</option>
              </select>
          </div>
        </div>
      </div>
    );
  }

export default Launch;