package service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.AddressDao;
import service.AddressService;

@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	AddressDao AddressDao;
	
	@Autowired
	public AddressServiceImpl(dao.AddressDao addressDao) {
		AddressDao = addressDao;
	}

	@Override
	public void deleteAddress(int mId, int aId) {
		AddressDao.deleteAddress(mId, aId);
	}
}
