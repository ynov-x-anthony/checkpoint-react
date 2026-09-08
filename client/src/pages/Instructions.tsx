function Instructions() {
  return (
    <>
      <h1>Macaron Union</h1>
      <section className="instructions">
        <h2>🍪 Step 1 - Get the macarons</h2>
        <p>
          You started a json server when running <code>npm run dev</code>. You
          can check the API is available at{" "}
          <a href="http://localhost:3310/api/">http://localhost:3310/api/</a>.
        </p>
        <p>
          Your first mission is to{" "}
          <strong>get the macarons from the API</strong>.
        </p>
        <p>
          You should fetch the{" "}
          <a href="http://localhost:3310/api/macarons">
            http://localhost:3310/api/macarons
          </a>{" "}
          in the <code>client/src/pages/MacaronList.tsx</code> file (which
          handles the
          <code>/macarons</code> route). Use the <strong>useEffect</strong> hook
          to fetch the data and <strong>useState</strong> to store the{" "}
          <em>macarons</em>.
        </p>
        <p>
          You can check the result with a <code>console.info</code> for this
          step.
        </p>
      </section>
      <section className="instructions">
        <h2>🍬 Step 2 - Show all the macarons</h2>
        <p>
          In the <code>MacaronList</code> page,{" "}
          <strong>map you macarons</strong> to display the list using JSX. You
          can use the <code>Macaron</code> component: pass the macaron data
          through a prop <code>data</code>
        </p>
        <p>
          Remember to add a <code>key</code> prop to each element created
          through your map. You can use the macaron id here ;)
        </p>
      </section>
      <section className="instructions">
        <h2>🍪 Step 3 - Get the accessories</h2>
        <p>
          For this step, get the accessory list from the API. This time you
          don't need to fetch the data in the loader <em>before</em> rendering.
          You can do the fetch <strong>using an effect</strong>.
        </p>
        <p>
          In the <code>MacaronList</code> page, fetch the{" "}
          <a href="http://localhost:3310/api/accessories">
            http://localhost:3310/api/accessories
          </a>{" "}
          endpoint. Be sure to <strong>type the data you get</strong> from the
          API.
        </p>
        <p>
          Once again, you can check the result with a <code>console.info</code>.
        </p>
        <details>
          <summary>Hint</summary>
          You will need a state to store the accessories (initialized with an
          empty array). Be sure to fetch the API only once using the
          dependencies array of <code>useEffect</code>.
        </details>
        <details>
          <summary>Hint 2 (about types)</summary>
          You can add the following type declaration in your code :
          <code>
            <pre>
              {
                "type AccessoryArray = { id: number; name: string; slug: string }[];"
              }
            </pre>
          </code>
          Then use the <code>as AccessoryArray</code> type assertion where you
          need.
        </details>
      </section>
      <section className="instructions">
        <h2>🍬 Step 4 - Fill the accessories selector</h2>
        <p>
          The <code>select</code> in <code>MacaronList</code> only contains an
          empty option.
        </p>
        <p>Fill the list with one option per accessory.</p>
        <details>
          <summary>Hint</summary>
          Map your accessories to produce the options. You should end up with
          something like that:
          <code>
            <pre>
              {`<select id="macaron-select">
  <option value="">---</option>
  <option value="1">Cherry</option>
  <option value="2">Donut</option>
  <option value="3">Chocolate</option>
  <option value="4">agorski.dev</option>
  <option value="5">Christmas Candy</option>
</select>
`}
            </pre>
          </code>
        </details>
      </section>
      <section className="instructions">
        <h2>🍬 Step 5 - Filter the list</h2>
        <p>
          When the selected accessory changes, filter the macaron list before
          mapping.
        </p>
        <p>
          Note that when no accessories are selected, your filter should keep
          the whole list.
        </p>
        <details>
          <summary>Hint</summary>
          You will need an other state to store the selected accessory
          (initialized with an empty string). Connect the state with the{" "}
          <code>select</code> using the <code>value</code> and{" "}
          <code>onChange</code> attributes.
        </details>

        <h2>⭐ Step 6 (Bonus) - Create a whole page</h2>
        <p>
          Create a <code>MacaronDetails</code> page. Add a route to display this
          page with the path <code>/macarons/:id</code>.
        </p>
        <p>
          You should wrap each macaron in <code>MacaronList</code> with a{" "}
          <code>{"<Link />"}</code> towards the <code>MacaronDetails</code>{" "}
          page.
        </p>
        <p>
          In the page, display the macaron (you will have to load it{" "}
          <em>before</em>).
        </p>
      </section>
    </>
  );
}

export default Instructions;
