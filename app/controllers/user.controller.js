exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.superAdminBoard = (req, res) => {
  res.status(200).send("Super Admin Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
