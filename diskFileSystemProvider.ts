  size: stat.size,
  permissions: (stat.mode & 0o200) === 0 ? FilePermissions.Locked : undefined
