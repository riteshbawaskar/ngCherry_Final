class ExecutionCtrl  {

  execute = async (req, res) => {
    try {
      console.log(JSON.stringify(req.params.execution));
      res.status(200);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default ExecutionCtrl;
