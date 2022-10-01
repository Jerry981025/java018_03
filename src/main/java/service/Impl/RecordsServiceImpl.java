package service.Impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.RecordsDao;
import model.OrderBean;
import service.RecordsService;

@Service
@Transactional
public class RecordsServiceImpl implements RecordsService {
	
	private RecordsDao recordsDao;
	
	private static Logger log = LoggerFactory.getLogger(RecordsServiceImpl.class);

	@Override
	public OrderBean findById(Integer oId) {
		log.info("依照orderNo編號讀取特定一筆訂單的所有資料之Service, orderId=" + oId);
		OrderBean  bean = null;
            bean = recordsDao.findById(oId);
		return bean;
	}

	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		log.info("依照memberId編號讀取某位會員所有訂單之Service: mId=" + mId);
		List<OrderBean> list = null;
            list = recordsDao.findByMemberId(mId);
        return list;
	}
}
