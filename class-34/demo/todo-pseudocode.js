<SettingsContext>
  /*
  s:darkMode
  s:numToShow
  s:hideCompleted
  */

  <LoginContext>

    /*
    s:isLoggedIn
    s:user
    f:login
    f:logout
    */

    <BrowerRouter>

      /*
      c:Link
      c:Route
      */

      <App>

        <Header>
          <Login />
          /*
            r:loginContext:isLoggedIn
            r:loginContext:login()
            r:loginContext:logout()
          */
        </Header>

        <Auth>
          /*
          r:loginContext:isLoggedIn
          */

        <Todo>

            /*
            s:List
            f:addItem
            */

          <Auth capability="create">
              /*
              r:loginContext:isLoggedIn
              r:loginContext:user.capabilities
              */
            <AddForm>

                /*
                s:formData
            f:handleSubmit (that probably calls addItem from <Todo />)
            */
            <bootstrap fields />
              </AddForm>
            </Auth>

            <List>
              <bootstrap toast>
                <pill />
                <Auth capability="delete">
                  /*
                  r:loginContext:isLoggedIn
                  r:loginContext:user.capabilities
                  */
                <delete button />
                </Auth>
                <content />
              </bootstrap>
            </List>

          </Todo>

        </Auth>

        <Footer />

      </App>

    </BrowerRouter>

  </LoginContext>

</SettingsContext>
