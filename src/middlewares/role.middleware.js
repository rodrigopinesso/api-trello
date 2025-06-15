function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'acesso negado: permissão insuficiente.' });
    }
    next();
  };
}

module.exports = authorizeRoles;