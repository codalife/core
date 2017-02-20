module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Footer: 'app/components/Footer.jsx',
      TasksList: 'app/components/TasksList.jsx',
      Task: 'app/components/Task.jsx',
      WorkStation: 'app/components/WorkStation.jsx',
      ToDo: 'app/components/ToDo.jsx',
      ToDoList: 'app/components/ToDoList.jsx',
      InfoSet: 'app/components/InfoSet.jsx',
      Dash: 'app/components/Dash.jsx',
      ModalNewTask: 'app/components/ModalNewTask.jsx',
      TechButton: 'app/components/TechButton.jsx',
      TechImage: 'app/components/TechImage.jsx',
      OddBall: 'app/components/Oddball.jsx',
      Modal: 'app/components/Modal.jsx',
      GameModalInstrusction: 'app/components/GameModalInstrusction.jsx',
      ModalRightSol: 'app/components/ModalRightSol.jsx',
      LuckModal: 'app/components/LuckModal.jsx',
      ModalWrong: 'app/components/ModalWrong.jsx',
      PMGModal: 'app/components/PMGModal.jsx',
      ArsenalModal: 'app/components/ArsenalModal.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
}
